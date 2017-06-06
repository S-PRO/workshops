from subprocess import call
from click import command
from click import option
from click import echo
from click import Choice


@command()
@option('--mode',
        type=Choice(['dev', 'prod']),
        help='Docker images build mode.',
        required=True)
def build(mode):
    """Build docker images."""
    echo('Building images in {} mode'.format(mode))
    try:
        call(['docker-compose',
              '-f', 'docker-compose.base.yml',
              '-f', 'docker-compose.{}.yml'.format(mode),
              'build'])
    except IOError:
        echo('Error: Compose file not found')
