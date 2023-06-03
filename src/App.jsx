import Menubar from './components/Menubar/Menubar';
import DocumentEditor from './components/DocumentEditor/DocumentEditor';

import { useState } from 'react';

function App() {
  const [menubarOpen, setMenubarOpen] = useState(true);
  return (
    <>
      <Menubar menubarOpen={menubarOpen} />
      <DocumentEditor
        menubarOpen={menubarOpen}
        setMenubarOpen={setMenubarOpen}
      />
    </>
  );
}

export default App;
