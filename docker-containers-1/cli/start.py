from subprocess import call
from click import command
from click import option
from click import echo
from click import Choice


@command()
@option('--mode',
        type=Choice(['dev', 'prod']),
        help='Docker container start mode.',
        required=True)
def start(mode):
    '''Start the docker containers.'''
    echo('Starting containers in {} mode'.format(mode))
    try:
        call(['docker-compose',
              '-f', 'docker-compose.base.yml',
              '-f', 'docker-compose.{}.yml'.format(mode),
              'up', '-d'])
    except IOError:
        echo('Error: Compose file not found')
