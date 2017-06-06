from setuptools import setup

setup(name='sandbox',
      version='0.1',
      py_modules=['cli'],
      install_requires=['Click'],
      entry_points='''
          [console_scripts]
          sandbox=cli:cli
      ''',)
