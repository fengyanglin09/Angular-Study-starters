### Using the Signal-based approach instead of decorators offers some additional advantages:


You can make the query results more predictable.

All Signal-based queries return a Signal and when there are multiple values, the Signals returns a regular array. The decorators return a variety of return types and when your query returns multiple values, they return a query list instead of a regular array.

Signal-based queries can be used for HTML elements that change over time because they are rendered conditionally or outputted in a for loop. The directive approach has issues with both scenarios and doesn’t automatically notify you when the template is updated.

TypeScript can automatically infer the type of the queried HTML element or component.


