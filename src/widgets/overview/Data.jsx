const Data = {
    "article": [
        [`DeepMarket is an open source platform designed to allow dynamic contribution and consumption of computational resources, particularly at the network edge. DeepMarket utilizes edge computing to train machine learning models at a minimal cost. It leverages a shared economy of available computational resources similar to Uber or Airbnb.`,"article-para py-3"],

        [`Through DeepMarket, users can participate in the online market place by lending their idle resources to each other. By sharing their computational resources with DeepMarket, users can earn credits to use towards utilizing other available resources in DeepMarket to compute their machine learning models. In this way, researchers could use resources on DeepMarket for their computations possibly for free by sharing their available resources to others. To make this work, DeepMarket has a price generator mechanism dependent on what time a job will use available resources. With this, DeepMarket can proactively calculate how many credits an owner of resources will get and how much credits a user should expect to spend on their job.`,"article-para pb-3"],

        [`DeepMarket Architecture`,"article-subtitle font-sm-bold pb-2"],

        [`deepshare_arch.png`,"article-image"],

        [`1. Pluto`,"article-subtitle font-sm-bold py-2"],

        [`PLUTO is a simple and intuitive graphical user interface developed using PyQt5 which allows the user to create an account on our database. It also provides the users with the capability to either lend their machine's computational resources or submit jobs for execution. Users can lend the computational resources of any machine on which PLUTO is installed (i.e., they can remotely lend their spare resources without having to login to each machine and lend). Our current implementation of PLUTO supports only Ubuntu/ Linux Operating Systems.`,"article-para pb-3"],

        [`2. Services Module`,"article-subtitle font-sm-bold pb-2"],

        [`The services module resides on the master/server and interacts with machines through Internet connectivity. This module is responsible for many bookkeeping applications (e.g., user/resource database) as well as dynamic price generation and updating jobs' status both internally and across PLUTO applications.`,"article-para pb-3"],

        [`3. Executor Module`,"article-subtitle font-sm-bold pb-2"],

        [`The executor module resides on the master/server and is responsible for data file management, selection (scheduling) of resources, and execution of distributed tensorflow programs. We use a combination of Apache Spark, TensorFlowOnSpark, and HDFS to achieve these goals.`,"article-para"],
    ],
    "title" : "DeepMarket | Overview",
    "pageTitle": "Overview",
    "imageIndex": [3]
}

export default Data;