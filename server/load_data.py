import os
from sqlalchemy import create_engine
import psycopg2 
import io
import pandas as pd


def import_data(db_name):
    uri = 'postgresql+psycopg2:///{}'.format(db_name)
    engine = create_engine(uri)
    # output = "output.csv"
    # tb = pd.read_sql_table(tablename, engine)

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
    for tablename in tablenames:
        tb = pd.read_csv(os.path.join(output_dir, tablename))
        tb.to_sql(tablename, engine, if_exists='append', index=False)

if __name__ == "__main__":
    import_data('students')