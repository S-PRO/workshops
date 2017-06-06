from subprocess import call, Popen, PIPE, STDOUT
from click import command
from click import option


def abort_if_false(ctx, param, value):
    if not value:
        ctx.abort()


@command()
@option('--yes',
        is_flag=True,
        callback=abort_if_false,
        expose_value=False,
        prompt='Are you sure you want to KILL ALL containers?',)
def kill():
    '''KILL ALL docker containers.'''
    output = Popen(['docker', 'ps', '-qa'], stdout=PIPE, stderr=STDOUT)
    containers = [line.strip() for line in output.stdout.readlines()]
    for container in containers:
        call(['docker', 'stop', container])
        call(['docker', 'rm', container])
