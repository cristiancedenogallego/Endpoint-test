# # Tech Stack
I use typescript because it allowsme to do a well organized code and apply certain patters that are usefull for the problem

# How to run
Next command runs the software with the default test string saved in 'src/examles/basic.txt' 
`npm install` or `yarn install`
`npx ts-node cli.ts`

But you can also pass any path file to the script and it will run it for example:
`npx ts-node cli.ts './src/examples/test.txt'`

# Problem analysis
I split the problem in 2 parts

1) the text to command executable structure
- I created a class called TextToCommandConverter in charge of parse the text and convert to a Command (An object with a statement and params of the statement) that will be running for the CommandRunner class. 

2) The action statements
- I created an interface called Statement that will be implemented for each tipe of statement (Create, delete, move, list), in this way in the future we will be able to add more instructions conserving the same structure or replace a command implementetion just implementing the same interface.


