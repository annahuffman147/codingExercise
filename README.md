# Coding Exercise
Coding Exercise for CrownPeak interview process.
Due May 31, 2016

Write some code that will accept an amount and convert it to the appropriate string representation.

Example:
Convert 2523.04
to "Two thousand five hundred twenty-three and 04/100
dollars"



| input         | output       |Considerations
| -------------:|:-------------|:-------------|
| 1.58          | One and 58/100 dollars | single digit dollar amounts
| 31.35         | Thirty-one and 35/100 dollars |
| 2523.04       | Two thousand five hundred twenty-three and 04/100 dollars    | given example
| 1042.16       | One thousand forty-two and 16/100 dollars    | zero in hundreds place
| 532           | Five hundred thirty-two dollars   | whole dollar amounts
| 3432983.72    | Three million four hundred thirty-two thousand nine hundred eighty-three and 72/100 dollars | sets of three digits (i.e. 432,000)


Directions:
1. fork and clone this repo
2. npm install
3. cd into tests and run mocha
