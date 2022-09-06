# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A hash in Ruby is a collection of key and value pairs. It is similar to an array that contains values and unique index identifiers for each value. In a hash, rather than having index identifiers, each value can have a key that represents the value and allows it to be accessed. If the key in a hash is a symbol Class, the key and value pair would be represented as key:value. Otherwise, if the key is any Class other than a symbol, you would have to use a hash rocket, and the syntax with a string as a key would look like 'the string as a key' => value. We can manipulate the data in hashes using methods.

Researched answer: A hash is a collection of unique keys and values. The hash is indexed with keys, and the keys are used to access their values. The key-value pairs are represented with a symbol and the value (key:value). If the key is not a symbol, the pair is represented with a hash rocket (non_symbol_key => value). If you we to access a key that does not exist in the hash, it will return a default value of nil. In Ruby, everything is an object, which are created from classes. So to make a new hash, we can use variable = ClassName.new to make a new instance of that class.

2. What is a gem?

Your answer: Rubygems is the package manager for the Ruby language. It allows developers to download dependencies and files for Ruby. These are contained in libraries called gems. By using Rubygems, we can easily share code across devices due to the quick access developers have to gems. One gem that can be installed in Ruby is RSpec, the testing framework for Ruby. It installs all the necessary files to run RSpec so that we can write tests for Ruby.

Researched answer: The package manager used by Ruby is called Rubygems. We use Rubygems to download a library of files called gems. Gems contain dependencies, files, snippets of code, etc. that are easily downloadable using Rubygems. They make it easy to share code with others because anyone can easily download the necessary gems for a certain functionality on their device. Developers can also publish their own gems to be distributed.

3. What is Ruby on Rails?

Your answer: Ruby on Rails is an application framework that allows developers to create a web application using front-end and back-end development. It has a MVC structure; MVC stands for model, view, and controller. The model is for the databases that Rails can connect to, the back-end side of the framework. The view is the what the user can see from the application to be able to interact with it and the only part that most people know to be a part of a website. The controller collects user input and data from user interaction with the view and brings it to the database and vice versa, the data in the model can be brought forward to the view.

Researched answer: Ruby is an OOP language that is made to be easy for developers to understand. Ruby on Rails was created for Ruby, allowing developers to create full-stack web applications in an easier manner. It was built upon the Ruby motto of making coding easier and more intuitive for developers. It follows the MVC structure of model, view, and controller. The model contains the database information and schemas; the view is the interface that the user sees and how the user can interact with the application; the controller is the bridge that connects the model and view aspects.

4. What is a relational database? Are there other kinds of databases?

Your answer: A database holds collected data, and relational databases  have multiple data tables that can be connected to each other. One method to connect the data tables together is with associations. Every data table holds data with primary keys, and we can connect the data in tables to the main table using those primary keys. We associate the tables using keywords like "belongs to" and "has many" to let the computer know that certain tables refer to queries in others. So far, the only database that I have learned about are relational databases, but I am sure that there are other types of databases.

Researched answer: Relational databases are a type of database that stores and provides access to information that is related to each other. Each query in a data table has a unique identifying key that can be used as a connection point with other data tables. The queries of other tables can be assigned to the key of another table, creating a relationship between the tables. There are 8 types of databases: relational, centralized, distributed, personal, end-user, commercial, noSQL, and operational.

5. What are primary keys? Why are they important?

Your answer: Primary key are unique ids that each query in a database have. Just as objects have key and value pairs, queries each have a primary key that is only for the data that it holds. No other query in the data table has the same key. This is because the information in tables can be the same or overlap, so it is important to have a unique identifier so that the computer knows the specific data that is being referred to. Otherwise, the commands for one query might be performed on another query with similar data, and many issues might occur from this.

Researched answer: Primary keys are IDs in a relational database that are unique for each data entry. They are another column in the relational database that is automatically created for each query. They can be used to identify each query, organize records, and create relationships between different tables. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer. And RESTful routes provide a connection between the server and a client. We can use actions that display content and connect them to HTTP verbs.

2. JSON: JSON stands for JavaScript Object Notation. It is data that is written using the syntax of a JavaScript object.

3. ERB: ERB stands for Embedded Ruby. It allows us to use Ruby code inside an HTML file. This is similar to how we can use HTML-like tags with JSX in JS files.

4. Params: Params is short for parameters. In Rails, we can pass arguments/values to a controller through parameters, making a page more dynamic.

5. API: API stands for Application Programming Interface. They allow for two applications to communicate with each other. A company can have APIs open to the public for people to use their data and functionality on their own applications.
