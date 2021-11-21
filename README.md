Simple and Powerful !!!


### installation

```bash
$ npm install my-int

```



a library for react that can easily manipulate integers like adding a comma every 3 digits , formatting Rank and much more!!


### usage

```js
import {Comma, FormatNum,Rank,Shuffle} from "my-int"
function App(){
    return(
    <div>
	<Comma value={1000000}/> //1000,000
	<FormatNum value{1000}/> //1k
	<FormatNum value{1000} type="id"/> //1rb indo style
	<Rank value={1}/>  //1st
	<Rank value={2}/>  //2nd
	<Rank value={3}/>  //3rd
	<Rank value={4}/>  //4th
	<Shuffle min={10} max={20}/> // random between 10 - 20
    </div>
	  )
}

```
hope it can be useful
