from pymongo import MongoClient
from pprint import pprint

client = MongoClient()
db = client.bigDataReddit
collection = db.myCollection

pprint("Finding all posts in soccer subreddit")
for post in collection.find({"subreddit" : "soccer"}):
    pprint(post)