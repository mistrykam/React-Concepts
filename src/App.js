import "./App.css";
import React from "react";
import ClassCounter from "./components/class-counter";
import HookCounterOne from "./components/hook-counter-1";
import HookCounterTwo from "./components/hook-counter-2";
import HookCounterThree from "./components/hook-counter-3";
import HookCounterFour from "./components/hook-counter-4";
import HookCounterUseEffects from "./components/hook-counter-use-effects";
import ClassMouse from "./components/class-mouse";
import HookMouse from "./components/hook-mouse";
import MouseContainer from "./components/mouse-container";
import IntervalClass from "./components/interval-class";
import IntervalHook from "./components/interval-hook";
import DataFetching from "./components/data-fetching";

import { UserContext, ChannelContext } from "./components/Contexts/my-context";

import ComponentA from "./components/Contexts/component-A";
import HookReducer from "./components/hook-reducer";
import HookReducerTwo from "./components/hook-reducer-two";
import HookReducerApi from "./components/hook-reducer-api";
import Employee from "./components/CallBack/employee";
import FocusInput from "./components/focus-input";
import HookTimer from "./components/hook-timer";
import ModalClick from "./components/Modal/modal-click";
import ColourPicker from "./components/colour-picker";
import DatePickerExample from "./components/date-picker";
import InputForm from "./components/Form/input-form";
import { HookLocalStorage } from "./components/hook-local-storage";

function App() {
  return (
    <div className="App">
      <div>
        <div className="links">
          <ul>
            <li>
              <a href="https://reactjs.org/docs/hooks-reference.html">Hooks API Reference</a> - React reference documentation
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=f687hBjwFcM">React Hooks Tutorial</a> - Overview of each concept in one video
            </li>
          </ul>
        </div>

        <h3>Basic Hooks</h3>
        <div className="item">
          const [value, setValue] = <span className="keyword">useState</span>(initialValue)
          <div className="description">
            Returns a stateful value, and a function to update it. Use the function to update the state value, using setValue(newValue);
            <br />
            <br />
            <code>
              &lt;button onClick={"{"}() =&gt; setCount(prev =&gt; prev + 1){"}"}>Increment&lt;/button&gt;
            </code>
          </div>
        </div>
        <div className="item">
          const <span className="keyword">useEffect</span>(() =&lt; {"{"} ...statements... {"}"}, [dependencies])
          <div className="description">
            Perform side effects in function components. If you can specfic a optional return function that's get called upon an unmount and
            dependency change. If the [dependencies] list is empty then then this is only called on when component is mounted (once), other the
            useEffect method and optional return is called when the dependent object is changed. <br />
            <br />
            You can have more than one useEffect on the component, and they are fired off in the order they appear.
          </div>
        </div>
        <div className="item">
          const myRef = <span className="keyword">useRef</span>(initialValue)
          <div className="description">
            returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)
            <br />
            <br />
            <code>&lt;input type="text" ref="myRef"&gt;&lt;/input&gt;</code>
          </div>
        </div>
        <h3>Create your own Hook</h3>
        <div class="item">
          <span className="keyword">custom hook</span>
          <div class="description">
            Building your own Hooks lets you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts
            with ”use” and that may call other Hooks.
            <br />
            <br />
            <code>
              import {"{"} useState {"}"} from "react";
              <br />
              <br />
              export const useForm = (initalValues) =&gt; {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;const [values, setValues] = useState(initalValues);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return [values, (e) =&gt; setValues({"{"} ...values, [e.target.name]: e.target.value {"}"})];
              <br />
              {"}"};
              <br />
              <br />
              Usage: <br />
              &nbsp;&nbsp;&nbsp;&nbsp;const [values, handleChange] = useForm({"{"} username: "", password: "" {"}"});
            </code>
          </div>
        </div>
        <h3>Share data across Components</h3>
        <div className="item">
          export const UserContext = <span className="keyword">createContext</span>(null);
          <div className="description">
            Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current
            context value is determined by the value prop of the nearest &lt;MyContext.Provider&gt; above the calling component in the tree.
            <br />
            <br />
            When the nearest &lt;MyContext.Provider&gt; above the component updates, this Hook will trigger a rerender with the latest context value
            passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at
            the component itself using useContext.
            <br />
            <br />
            <code>
              export const UserContext = React.createContext(null);
              <br />
              <br />
              function App() {"{"}
              <br />
              &nbsp;&nbsp;const [user, setUser] = useState({"{"}userId: 0, userName: ""{"}"})<br />
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;UserContext.Provider user={"{"}user{"}"}&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Toolbar /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/UserContext.Provider&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              {"}"}
              <br />
              <br />
              function Toolbar() {"{"}
              <br />
              &nbsp;&nbsp;const {"{"}user{"}"} = useContext(UserContext);
              <br />
              &nbsp;&nbsp;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;pre&gt;JSON.stringify(user, null, 2)&lt;/pre&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              );
              <br />
              <br />
            </code>
          </div>
        </div>

        <h3>Reducer for complex state changes</h3>

        <div className="item">
          const [state, dispatch] = <span className="keyword">useReducer</span>(reducer, initialArg, init);
          <div className="description">
            An alternative to useState. Accepts a reducer of type (state, action) =&gt; newState, and returns the current state paired with a dispatch
            method. (If you’re familiar with Redux, you already know how this works.)
            <br />
            <br />
            useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state
            depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass
            dispatch down instead of callbacks.
            <br />
            <br />
            <code>
              const initialState = {"{"}count: 0{"}"};
              <br />
              <br />
              function reducer(state, action) {"{"}
              <br />
              &nbsp;&nbsp;switch (action.type) {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;case 'increment':
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {"{"}count: state.count + 1{"}"};<br />
              &nbsp;&nbsp;&nbsp;&nbsp;case 'decrement':
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {"{"}count: state.count - 1{"}"};<br />
              &nbsp;&nbsp;&nbsp;&nbsp;default:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new Error();
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <br />
              function Counter() {"{"}
              <br />
              &nbsp;&nbsp;const [state, dispatch] = useReducer(reducer, initialState);
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count: {"{"}state.count{"}"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}() =&gt; dispatch({"{"}type: 'decrement'{"}"}){"}"}
              &gt;-&lt;/button&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}() =&gt; dispatch({"{"}type: 'increment'{"}"}){"}"}
              &gt;+&lt;/button&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
              <br />
              );
              <br />
              {"}"} <br />
            </code>
          </div>
        </div>
      </div>
      <div>
        <h3>Optimize Performance: useMemo + useCallback</h3>
        <div className="item">
          const memoizedValue = <span className="keyword">useMemo</span>(() =&gt; computeExpensiveValue(a, b), [a, b]);
          <div className="description">
            NOTE: Every time a state value or event is fired, the component's function is executed. If you have a function that should not be called
            every time, then useMemo. If you can make the function outside of the React component, otherwise you have to use <i>useCallback</i>.
            <br />
            <br />
            Returns a memoized value. Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one
            of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
            <br />
            <br /> Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while
            rendering. For example, side effects belong in useEffect, not useMemo. <br />
            <br /> If no array is provided, a new value will be computed on every render. <br />
          </div>
        </div>
        <div className="item">
          const memoizedCallback = <span className="keyword">useCallback</span>( () =&gt; {"{"}
          doSomething(a, b);
          {"}"}, [a, b], );
          <div className="description">
            Returns a memoized callback.
            <br />
            <br />
            Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one
            of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to
            prevent unnecessary renders (e.g. shouldComponentUpdate).
            <br />
            <br />
            useCallback(fn, deps) is equivalent to useMemo(() =&gt; fn, deps).
          </div>
        </div>
        <h3>Routing</h3>
        <div className="item">
          Router
          <div className="description">
            You need to install React-Router: <code>npm install react-router-dom</code>
            <br />
            <br />
            <a href="https://reactrouter.com/web/guides/quick-start">React-Router</a> - documentation
            <br />
            <br />
            <code>
              import {"{"} BrowserRouter as Router, Switch, Route, Link {"}"} from "react-router-dom";
              <br />
              <br />
              export default function App() {"{"}
              <br />
              &nbsp;&nbsp; return (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; &lt;Router&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Link to="/"&gt;Home&lt;/Link&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Link to="/about"&gt;About&lt;/Link&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Link to="/users"&gt;Users&lt;/Link&gt;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Switch&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Route path="/about"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;About /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/Route&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Route path="/users"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Users /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/Route&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Route exact path="/"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;Home /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/Route&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/Switch&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; &lt;/Router&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; );
              <br />
              {"}"}
              <br />
            </code>
          </div>
        </div>

        <h3>Layout changes</h3>

        <div className="item">
          <span className="keyword">useLayoutEffect</span>
          <div className="description">
            <i>Rarely used:</i> <br />
            <br />
            The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and
            synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.
            Prefer the standard useEffect when possible to avoid blocking visual updates.
          </div>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> - allows you to associate
              handlers with an asynchronous action's eventual success value or failure reason
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await">async...await</a> - syntactic sugar on top
              of promises, making asynchronous code easier to write and to read afterwards.
            </li>
          </ul>
        </div>

        <h3>Promises, async/await</h3>

        <div className="item">
          let myFirstPromise = new <span className="keyword">Promise</span>((resolve, reject) =&gt; {"{"} ... {"}"})
          <div className="description">
            Promise is a function that takes two paramters
            <br />
            - resolve - if the step is successfully
            <br />
            - reject - if the step fails
            <br />
            <br />
            <code>
              let myFirstPromise = new <span className="keyword">Promise</span>((resolve, reject) =&gt; {"{"} <br />
              &nbsp;&nbsp; // We call resolve(...) when what we were doing asynchronously was successful, <br />
              &nbsp;&nbsp; // and reject(...) when it failed. <br />
              &nbsp;&nbsp; // In this example, we use setTimeout(...) to simulate async code. <br />
              &nbsp;&nbsp; // In reality, you will probably be using something like XHR or an HTML5 API. <br />
              <br />
              &nbsp;&nbsp; setTimeout( function() {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let a = 1 + 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a === 2) {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; resolve("Success!") // Yay! Everything went well! <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} else {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; reject("Failure!") // Failure! <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              &nbsp;&nbsp; {"}"}, 250) <br />
              {"}"}) <br />
              <br />
              myFirstPromise.then((successMessage) =&gt; {"{"} <br />
              &nbsp;&nbsp; // successMessage is whatever we passed in the resolve(...) function above. <br />
              &nbsp;&nbsp; // It doesn't have to be a string, but if it is only a succeed message, <br />
              &nbsp;&nbsp; // it probably will be. <br />
              <br />
              &nbsp;&nbsp; console.log("Yay! " + successMessage) <br />
              {"}"}) <br />
              .catch((errorMessage) =&gt; console.log(errorMessage)); <br />
            </code>
          </div>
        </div>

        <div className="item">
          <span className="Promise">
            <span className="keyword">async</span> function myFetch(){"{"} ...<span className="keyword">await</span> something() {"}"}{" "}
          </span>
          <div className="description">
            <code>
              async function myFetch() {"{"} <br />
              &nbsp;&nbsp; let response = await fetch('coffee.jpg'); <br />
              &nbsp;&nbsp; <br />
              &nbsp;&nbsp;&nbsp;&nbsp; if (!response.ok) {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; throw new Error(`HTTP error! status: ${"{"}response.status{"}"}`); <br />
              &nbsp;&nbsp;&nbsp;&nbsp; {"}"} else {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let myBlob = await response.blob(); <br />
              &nbsp;&nbsp; <br />
              &nbsp;&nbsp;&nbsp;&nbsp; let objectURL = URL.createObjectURL(myBlob); <br />
              &nbsp;&nbsp;&nbsp;&nbsp; let image = document.createElement('img'); <br />
              &nbsp;&nbsp;&nbsp;&nbsp; image.src = objectURL; <br />
              &nbsp;&nbsp;&nbsp;&nbsp; document.body.appendChild(image); <br />
              &nbsp;&nbsp; {"}"} <br />
              {"}"} <br />
              <br />
              myFetch() <br />
              .catch(e =&gt; {"{"} <br />
              &nbsp;&nbsp; console.log('There has been a problem with your fetch operation: ' + e.message); <br />
              {"}"}); <br />
            </code>
          </div>
          <div className="description">
            <code>
              async function fetchUsers() {"{"} <br />
              &nbsp;&nbsp; const res = await fetch("https://jsonplaceholder.typicode.com/users"); <br />
              &nbsp;&nbsp; const data = await res.json(); <br />
              <br />
              &nbsp;&nbsp; return data; <br />
              {"}"} <br />
              <br />
              const users = await fetchUsers(); <br />
            </code>
          </div>

          <h3>Destructing, Spread Operator, Rest Operator</h3>

          <div className="links">
            <ul>
              <li>
                <a href="https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/#:~:text=Destructuring%20in%20JavaScript%20is%20a,looks%20similar%20to%20array%20literals.">
                  Destructing
                </a>{" "}
                - unpack values from arrays, or properties from objects, into distinct variables.
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread Operator</a> - Spread
                syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for
                function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more
                key-value pairs (for object literals) are expected.
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Rest Operator</a> - The rest
                parameter syntax allows us to represent an indefinite number of arguments as an array.
              </li>
              <li>
                <a href="https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/">How To</a> - can extract data from arrays
                and objects and assign them to variables.
              </li>
            </ul>
          </div>

          <div className="item">
            Desconstructing Arrays
            <div className="description">
              <code>let [first, second, third] = ["Laide", "Gabriel", "Jets"];</code>
            </div>
            Desconstruction Objects
            <div className="description">
              <code>
                const user = {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: 42,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;is_verified: true
                <br />
                {"}"};<br />
                const {"{"} id, is_verified {"}"} = user;
              </code>
            </div>
            Spread Operator
            <div className="description">
              <code>
                let arr = [1,2,3]; <br />
                let arr2 = [4,5]; <br />
                <br />
                arr = [...arr,...arr2]; <br />
              </code>
            </div>
            Rest Operator
            <div className="description">
              <code>
                let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];
                <br />
                <br />
                console.log(greeting);//"Hello"
                <br />
                console.log(intro);//["I", "am", "Sarah"] <br />
              </code>
            </div>
          </div>
        </div>
      </div>

      <HookLocalStorage></HookLocalStorage>

      <InputForm></InputForm>

      {/* Context */}
      <UserContext.Provider value={{ userName: "melissa.hunter@gmail.com" }}>
        <ChannelContext.Provider value="Weather Network">
          <ComponentA></ComponentA>
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* Hooks */}
      <ClassCounter></ClassCounter>
      <HookCounterOne></HookCounterOne>
      <HookCounterTwo></HookCounterTwo>
      <HookCounterThree></HookCounterThree>
      <HookCounterFour></HookCounterFour>
      <HookCounterUseEffects></HookCounterUseEffects>
      <ClassMouse></ClassMouse>
      <HookMouse></HookMouse>
      <MouseContainer></MouseContainer>
      <IntervalClass></IntervalClass>
      <IntervalHook></IntervalHook>
      <DataFetching></DataFetching>
      <HookReducer></HookReducer>
      <HookReducerTwo></HookReducerTwo>
      <HookReducerApi></HookReducerApi>
      <Employee></Employee>
      <FocusInput></FocusInput>
      <HookTimer></HookTimer>
      <ModalClick></ModalClick>
      <ColourPicker></ColourPicker>
      <DatePickerExample></DatePickerExample>
    </div>
  );
}

export default App;
