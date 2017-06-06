from click import Group
from cli.start import start
from cli.stop import stop
from cli.logs import logs
from cli.build import build
from cli.kill import kill

cli = Group()
cli.add_command(start)
cli.add_command(stop)
cli.add_command(logs)
cli.add_command(build)
cli.add_command(kill)
