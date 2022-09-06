# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

=begin
    PSEUDO CODE:
        define a method named contains_letter
        takes in 2 arguments: one is an array of words and two is a single letter string
            iterate through the array of words
            check if each word in the array includes the given letter or not
        return an array of all the words that contain that letter
=end

def contains_letter array, letter
    array.select{|word| word.include? letter}
end

p contains_letter beverages_array, letter_o
p contains_letter beverages_array, letter_t


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington']

=begin
    PSEUDO CODE:
        define a method named alphabetical_order
        takes in a hash with key and array values
        access each key value pair in the hash and concatenate them
        (is there a way to access the keys without knowing the name?)
            sort the combined array in alphabetical order
        returns a combined array of all the values in alphabetical order
=end

def alphabetical_order state_hash
    p state_hash[:northwest].concat(state_hash[:southwest]).concat(state_hash[:northeast]).sort
end

alphabetical_order us_states


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

=begin
    PSEUDO CODE:
        create a new class called Bike
        use attr_accessor to be able to call on the instance variables
        have an initialize method with 3 instance variables: model, wheels, current_speed
            wheel and current_speed have a default value of 2 and 0
        have a bike_info method that returns a string interpolation of the car
=end

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

=begin
    PSEUDO CODE:
        define a method called pedal_faster inside the Bike class
        takes in a number and increases the current_speed by that amount
            add number to current_speed
        return new current speed

        define a method called brake inside the Bike class
        takes in a number and decreases the current_speed by that amount
            create conditional statements for decreasing the speed
            1st condition: argument number is greater than current_speed
                current_speed is set to 0 since it cannot go negative
            2nd condition: argument number is less than current_speed
                subtract number from current_speed
        return new current speed
=end

class Bike
    attr_accessor :model, :wheel, :current_speed
    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster speed
        p @current_speed += speed
    end

    def brake speed
        if speed > @current_speed
            p @current_speed = 0
        elsif speed < @current_speed
            p @current_speed -= speed
        end
    end
end

bike1 = Bike.new("Trek")
p bike1
bike1.bike_info
bike1.pedal_faster 10
bike1.pedal_faster 18
bike1.brake 5
bike1.brake 25
bike1.pedal_faster 25
