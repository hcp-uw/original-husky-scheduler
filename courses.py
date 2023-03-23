import json
# import uwtools
from uwtools import course_catalogs

# Get the course catalogs from the uwtools library as a
# python Dictionary
course_catalog_dict = uwtools.course_catalogs(struct='dict')

with open('parse.json', mode='w') as f:
    # Indent and sort_keys are optional parameters, but help when looking 
    # through the .json file
    json.dump(course_catalog_dict, f, indent=4, sort_keys=True)

