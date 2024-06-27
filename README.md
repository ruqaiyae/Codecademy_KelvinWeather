# Codecademy_KelvinWeather
Codecademy - Introduction to JavaScript - Kelvin Weather

Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F.


Tasks
Task 1: The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. Choose the variable type with this in mind.

Task 2: Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

Task 3: Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
    Fahrenheit = Celsius * (9/5) + 32
In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.

Task 4: When you convert from Celsius to Fahrenheit, you often get a decimal number.
Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

Task 5: Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:
      The temperature is TEMPERATURE degrees Fahrenheit.
Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.

Task 6: Run your program to see your results!

Task 7: By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.
What’s 0 Kelvin in Fahrenheit?

Task 8: Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit.
If you’d like extra practice, try this:

Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console
