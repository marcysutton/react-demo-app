const { withBrowser } = require('pleasantest');

test(
    'To Do List',
    withBrowser(async ({ utils, user, screen }) => {
      await utils.runJS(`
        // ./app could be a .js, .jsx .ts, or .tsx file
        import { ToDoList } from './ToDoList';
        import { render } from 'react-dom';
  
        render(<ToDoList />, document.body);
      `);
      const button = await screen.getByTestId('test-button');
      await button.focus();
      await user.type(button, '{enter}');
    }),
);