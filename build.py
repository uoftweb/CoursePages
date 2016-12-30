from jinja2 import Environment, PackageLoader

env = Environment(loader=PackageLoader('course-pages', 'templates'))

template = env.get_template('index.html')

# this index.html is not the index in the template directory
target = open('./index.html', 'w+')

target.write(template.render())
target.close()
