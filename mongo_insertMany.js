db.myCollection.insertMany([
    {
        time: 1557332315,
        subreddit: "movies",
        user:
        {
            username: "noobmaster69",
            profilePic: "www.atechgiant.com/images/pic.jpg",
            country: "ZAR",
            totalUpvotes: 42069,
            totalDownvotes: 123, 
            creationDate: 1525846727
        },
        upvotes: 789,
        downvotes: 2,
        content:
        {
            title: "I'm in the new Avengers movie",
            body: "This is so cool",
            link: null
        },
        labels: ["movies", "marvel"]
    },

    {
        time: 1537433037,
        subreddit: "soccer",
        user:
        {
            username: "NotLionelMessi",
            profilePic: "www.atechgiant.com/images/messiSoloRun.jpg",
            country: "USA",
            totalUpvotes: 26720,
            totalDownvotes: 1335, 
            creationDate: 1524836923
        },
        upvotes: 18125,
        downvotes: 1234,
        content:
        {
            title: "The truth about Messi",
            body: "He is the best ever.",
            link: null
        },
        labels: ["soccer", "messi"]
    },

    {
        time: 1536335638,
        subreddit: "worldnews",
        user:
        {
            username: "ImNotABot",
            profilePic: "www.atechgiant.com/images/lol.jpg",
            country: "UK",
            totalUpvotes: 16720,
            totalDownvotes: 235, 
            creationDate: 151463726
        },
        upvotes: 27892,
        downvotes: 453,
        content:
        {
            title: "Proposal to spend 25% of EU budget on climate change",
            body: null,
            link: "https://www.bbc.co.uk/news/world-europe-48198646"
        },
        labels: ["worldnews", "EU", "climate change"]
    }
]);