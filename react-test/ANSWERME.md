1. What React components does your app have and what is the responsibility of each component?
(_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

- `Context`: generates global context that allows all the components to make use of the array of numbers state, and make the numbers available for the Chart functions.
- `modulesInput`: it handles the form and is display and manipulate in both the Radar and the Bar page.
- `Radar`: Radar Page, it shows the radar chart.
- `Bar`: Bar page, it shows the bar chart.

`App` - Functions as the entry point for the whole application. Renders the app container component.


2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.
- Answer: I added min="1" and max="10" to <input> so the user can only add numbers between 1 and 10. That solves the issue.

(_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
(_TIP: For example, if the new feature was to add an option to change the color of the radar graph it would be:_

- Create a color picker component
- Add the color picker component to the radar graph page
- Add a paremeter to the `getRadarChartUrl` to set the color
- Update the `getRadarChartUrl` function to pass the color to the API
)

- Answer: to change colors I'll passed the colors as a value in the global Context.


