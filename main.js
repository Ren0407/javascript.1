'use strict';

{
  //1
  console.log('HelloWorld');

  //2
  console.log(3 + 7);

  //3
  console.log('3' + '7');

  //4
  console.log(5 * 2);

  //5
  console.log('プログラミング' + 'スクール');
}


{
  //6
  let name = 'プログラミングスクール';
  console.log(name);
}

{
  //7
  let a = 5;
  console.log(a * a);
}

{
  //8
  let name = 'プログラミングスクール';
  console.log(name);
  name = 'programmingschool';
  console.log(name);
}

{
  //9
  const language = '日本語'
  console.log(language + 'を話せます。');
}

{
  //10
  const name = '伊藤蓮'
  const age = '25'
  console.log(`僕の名前は${name}です。\n現在${name}は${age}歳です。`);
}

{
  //11
  const level = 20;

  if (level >= 10) {
    console.log('強い');
  } else if (level < 10) {
    console.log('弱い');
  }
}

{
  //12
  const n = 2;

  switch(n) {

    case 1:
      console.log('大吉');
      break;
    
    case 2:
      console.log('吉');
      break;

    case 3:
      console.log('小吉');
      break;
     }
}

