# Value vs Refference
-------
### How Passing Arguments Works: Value vs. Reference

[Read the code here](./value_vs_refference.js)

Notes about passing Value vs. Refference as arguments:

When passing a primitive value as an argument to a function a new variable will be created. Its create a whole new variable with the same value of the original one. It means that any change in the variable inside the function will never affect the original variable outside the function.

Things work a little bit different when talking about Objects as we see before in previous sections. Objects are store in the Heap memory, so the variable that store these objects store its address in fact as a value and not the object itself. So when we pass a object as an argument to a function, it is the object reference that are being passed (as a value), then when something is modified in the object inside the function it will affect the whole object everywhere in the code, because we are not creating a copy of the object but passing its address, then the JavaScript goes to the address and change it affecting the Object entirely.

To finish is important to know that in JavaScript there is no **passing by reference** as other programming languages. Even though we are passing the reference as an argument to the function it goes as a **value** (value that is equal to the object reference in memory) and not by **reference.**


#### This repository is in my #100-Days-Of-Code Challenge log
[100-Days-Of-Code log](https://github.com/Holiv/100DaysOfCode/blob/main/log.md)