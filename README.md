# play-with-react-suspense

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/play-with-react-suspense)

### Before React suspense had been published, How we was fetching data?

"Render then fetch"

- This is the old common way for fetching data.
- Will init fetch inside react life cycle method (e.g. once the component mount).

### Issues with this approach?

- Leads to Network Waterfall.
- Slow web app
  - We need to requests the component.
  - Then render it.
  - Then will init the request.
- More complex component, as we should handle loading state.
  - inside each component we need to think what should be rendered during loading state & what should be rendered after finishing loading.

# Stratiges for fetching data using React Suspense

## 1. TODO
