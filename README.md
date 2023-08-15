# Eventio

## What needs to be done next

### Missing features

### Event detail and Edit event
These will be similar to the existing `CreateEvent.tsx` form. They will share the layout of `DashboardLayout` and thus will be subroutes of `/events`. In the `routerData` add the paths in the `children` prop of `events`. For frontend validation of the edit form, use the `useForm` hook as done in other already implemented forms.

### Sign up
This component will be quite similar the login form but with extra steps. 

### Sign out drop down styling
The styling for the drop down is not finished. Please complete the styling in `HeaderAccount.tsx`

### Possible consolidatons

#### Extract and structure commonly used css
At the moment some common styles for components are not structured in a way that would allow better scalability of the project. 
1. `font-size, font-family, font-weight` styles should be extracted into common typography object.
2. Colors declared in `colors.ts` should not be used directly in components. Instead these should be used in a more logical way.

#### Typing and handling interceptors
1. Interceptors from `axios` in `client.ts` should be typed more properly. For example we should be able to type enumarate the types of codes in `AxiosError`
2. In the case of `UNAUTHORIZED` state, we're not handling the potential failure of the original request retry. Please add error handling.
 
#### Potential change in project structure
I've kind of realized that as the project grew the structure of the project was not ideal. For example components in the `/src/components/events` will never be used by other pages than `/events` and therefore should not be located in the top level folder. In general, I would like a more scoped based/ granular solution. Please think of a way to structure the project better.

## How to start the project

First clone the repository as instructed here: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

In the project directory, you can run:

### `npm i`

To install needed packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

