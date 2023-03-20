import uwtools

course_catalog_df = uwtools.course_catalogs(struct='df')

course_catalog_df.to_csv('FILE_LOCATION')