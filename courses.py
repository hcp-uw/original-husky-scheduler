import uwtools

#PROB: cannot find uwtools (hints that it is not installed but it is)

# Get the course catalogs from the uwtools library as a
# pandas DataFrame
course_catalog_df = uwtools.course_catalogs(struct='df')

# course_catalog_df.to_csv('FILE_LOCATION')
