## Setup/Installations
* Install dependencies 
  * for server : ``npm install``
 * Run server (in main directory of project) ``npm start``

## APIS
**[GET]**   http://example.com/users

**[POST]**   http://example.com/user
```
{
    name:<string>,
    email:<string>
}
```
**[PUT]**   http://example.com/user/:id
```
{
    name:<string>,
    email:<string>
}
```

**[DELETE]**   http://example.com/user/:id

## LEVELS

### Level 1 
- Add CSS:
	- [ ] Convert the displayed data into an HTML table.
	- [ ] Ensure there is appropriate spacing and padding between table elements for better readability [refer screenshot].
- Fix Existing Issues:
	- [ ] The "Add User" button is currently not functioning. Identify the issue and fix it so that new users can be added.
	- [ ] Ensure that both the name and email fields are not left empty and contain valid values before submission.
	- [ ] Implement validation for the email field to ensure that only valid email addresses are accepted.

![image](https://github.com/impressai/frontend_task/assets/28563570/27ae4e34-0ccb-488f-9215-e95842322b97)




### Level 2
- Integrate Antd components
	- [ ] Table: Use Ant Design's table component to display the data.
	- [ ] Buttons: Replace existing buttons with Ant Design's button components.
	- [ ] Inputs: Use Ant Design's input components for forms.
- Fix Existing Issues: 
	- [ ] Form Reset on Submission: Ensure that after submitting the form, the values in the name and email input fields are cleared.

![image](https://github.com/impressai/frontend_task/assets/28563570/65eda298-0f5b-4923-bbcc-45f7caf1b758)



