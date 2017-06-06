from subprocess import call
from click import command
from click import option
from click import echo
from click import Choice


@command()
@option('--mode',
        type=Choice(['dev', 'prod']),
        help='Docker containers logging mode.',
        required=True)
def logs(mode):
    '''Show logs of the docker containers.'''
    try:
        call(['docker-compose',
              '-f', 'docker-compose.base.yml',
              '-f', 'docker-compose.{}.yml'.format(mode),
              'logs',
              '-f'])
    except IOError:
        echo('Error: Compose file not found')
