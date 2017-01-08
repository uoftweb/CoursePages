from jinja2 import Environment, PackageLoader
import os
import sys

def build(project_name, template_directory, main_template, 
        output_path, output_name):
    """
    Renders the templates in `project_name`/`template_directory` and
    writes it to the file located at `output_path`/`output_name`
    """
    env = Environment(loader=PackageLoader(project_name, template_directory))
    template = env.get_template(main_template)
    target = open(output_path + '/' + output_name, 'w+')
    target.write(template.render())
    target.close()

def handler(event_type, src_path):
    """
    Function that is passed to a watcher that polls for changes
    in a directory. This is run when some sort of change (an `event_type`)
    is detected.
    """
    # there are four kinds of event types: 
    #  created, deleted, modified, moved

    # ignore all files that start with .
    if os.path.basename(src_path)[0] == '.':
        return

    if event_type != 'moved':
        print('detected a change in ' + src_path)
        build('course-pages', 'templates', 'index.html', '.', 'index.html')


if __name__ == '__main__':
    if "--help" in sys.argv:
        print("python build.py [--watch]")
    else:
        # if argv = [command name, --watch, ...]
        if len(sys.argv) > 1 and sys.argv[1] == '--watch':
            import easywatch
            print("Watching course-pages/templates for changes")
            print("Ctrl-c to quit")
            easywatch.watch('./course-pages/templates', handler)
        else:
            build('course-pages', 'templates', 'index.html', '.', 'index.html')
