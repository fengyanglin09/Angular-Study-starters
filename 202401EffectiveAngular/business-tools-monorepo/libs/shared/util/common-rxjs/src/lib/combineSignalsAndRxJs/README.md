The toSignal function is used to transform an Observable into a Signal. The toSignal function is very similar to the ASYNC pipe, only with more flexibility and configuration options, and it can be used anywhere in the application. The syntax is pretty straightforward; you use the toSignal function and supply it with an Observable:


The toSignal function will also automatically unsubscribe from the Observable, given that the toSignal function is used within the injection context. When you use the toSignal function outside the injection context or want to make it dependent on a different injection context, you can provide the toSignal function with an injection context


When you set manualCleanup to true, the toSignal function will receive values up to the point the Observable it depends on is completed. When the inner Observable has been completed, the Signal will keep returning the last emitted value; this is also the case if you don’t use the manualCleanup configuration.

the initial value will be what you have set it to be until a new asynchronous value is received through the Observable. Having undefined as your initial value might cause problems inside computed signals or Signal effects that use the Signal with the undefined value.

if the Observable throws an error, the Signal will throw the error whenever the Signal is read. You can also set the rejectErrors option to true; in that case, the toSignal function will ignore the error and keep returning the last good value the Observable emitted


### example:

<code>
id = input(0);
product = toSignal(
  toObservable(this.id).pipe(
  switchMap((id) => this.service.getProduct(id as number)),
 ),
 { initialValue: null }
);
</code>
