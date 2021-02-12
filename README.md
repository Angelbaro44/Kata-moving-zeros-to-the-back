# Kata-moving-zeros-to-the-back

Discription
-
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
    
    
    
   Test Cases:
  -

    Test.assertEquals(
      JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
      JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
    );

    Test.assertEquals(
      JSON.stringify(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9])),
      JSON.stringify([9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
    );

    Test.assertEquals(
      JSON.stringify(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9])),
      JSON.stringify(["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
    );

    Test.assertEquals(
      JSON.stringify(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9])),
      JSON.stringify(["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0])
    );

    Test.assertEquals(
      JSON.stringify(moveZeros([0,1,null,2,false,1,0])),
      JSON.stringify([1,null,2,false,1,0,0])
    );
