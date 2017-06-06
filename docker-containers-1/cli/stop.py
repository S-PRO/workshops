from subprocess import call
from click import command
from click import option
from click import echo
from click import Choice


def abort_if_false(ctx, param, value):
    if not value:
        ctx.abort()


@command()
@option('--mode',
        type=Choice(['dev', 'prod']),
        help='Docker containers stop mode',
        required=True)
@option('--yes',
        is_flag=True,
        callback=abort_if_false,
        expose_value=False,
        prompt='Are you sure you want to stop the containers?',)
def stop(mode):
    '''Stop the docker containers.'''
    try:
        call(['docker-compose',
              '-f', 'docker-compose.base.yml',
              '-f', 'docker-compose.{}.yml'.format(mode),
              'down'])
    except IOError:
        echo('Error: Compose file not found')
