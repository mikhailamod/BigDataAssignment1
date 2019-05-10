from cassandra.cluster import Cluster

print("Connecting to cluster")
cluster = Cluster()
session = cluster.connect('redditbigdata')

print("connected, finding all posts in movies")
rows = session.execute('SELECT * FROM posts WHERE subreddit = \'movies\'')
for row in rows:
    print(row)
