It’s important to know that the computed Signal will only update when the Signal it depends on has a new stable value. Notice how I say stable value; this is because Signals provide their updates asynchronously and work a bit like the RxJS switchMap operator, which cancels the previous data stream if a new stream comes in before the old stream is finished. So, if you update the Signal multiple times in a row without pause in between, the Signal will not stabilize its value, and as a result, the computed Signal will only run on the last value change of the Signal.

Computed signals are very powerful and also very efficient. The computed Signal will not compute a value until the computed value is read for the first time. Next, the computed Signal will cache its value, and when you read the computed Signal again, it will simply return the cached value without running any computations. If the Signal value that the computed signal uses to derive its value from changes, the computed Signal will run a new computation and update its value.

Because computed Signals cache their results, you can safely use computationally expensive operations such as filtering and mapping arrays inside the callback function of your computed Signals. Just like regular Signals, computational Signals notify all consumers when their values change. As a result, all consumers of computed Signals will show the latest computed value.



One last thing that is good to know about computed Signals is that only Signals that are used during the computation are tracked.
