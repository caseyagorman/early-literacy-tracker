import os
from sqlalchemy import create_engine
import psycopg2 
import io
import pandas as pd

def dump_data(db_name):
    uri = 'postgresql+psycopg2:///{}'.format(db_name)
    engine = create_engine(uri)

    engine = create_engine(uri)
    output_dir = 'seed-data'

    tablenames = [
        "users",
        "groupnotes",
        "groups",
        "items",
        "readinglevels",
        "studentgroups",
        "studentitems",
        "students",
        "studenttestresults",
    ]

    for tablename in tablenames
        tb = pd.read_sql_table(tablename, engine)
        tb.to_csv(os.path.join(output_dir, tablename), index=False)

if __name__ == '__main__':
    dump_data('students')