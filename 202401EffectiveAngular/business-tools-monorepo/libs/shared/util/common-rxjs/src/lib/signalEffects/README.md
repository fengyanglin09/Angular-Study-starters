Signal effects are side effects that run each time a Signal changes. You can perform any logic you want inside a Signal effect. Some use cases for a Signal effect would be logging, updating local storage, showing notifications, or performing DOM manipulations that can’t be handled from within the HTML template.


Signal effects always run when the effect function is initialized. Furthermore, when you use a Signal inside the callback of the effect function, the effect function becomes dependent on that Signal, and the effect function will run each time one of the Signals it depends on has a new stable value.


It is also good to know that just as with computed Signals, a Signal effect only runs if the Signal within the effect function can be reached


Besides unreached Signals, you can also prevent the Signal’s effect function from reacting to a Signal by wrapping that Signal in the untracked function


By default, effects clean up when the injection context where the effect is declared is destroyed. If you don’t want this to happen and you need manual control over the destruction of the signal effect, you can configure the effect so that it uses manual cleanup


Besides manualCleanup and the onCleanup callback, there is one last configuration option for the Signal effects. By default, you are not allowed to update Signals inside a Signal effect; this is because this can easily result in infinite executions of the Signal effect. However, you can circumvent this by setting the allowSignalWrites property on the Signal effect
