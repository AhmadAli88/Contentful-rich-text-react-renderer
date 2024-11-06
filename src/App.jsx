import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './App.css';

const document = {
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: 'Hello world!',
          marks: [],
          data: {},
        },
      ],
    },
  ],
};

function App() {
  return (
    <div>
      {/* Render Contentful rich text here */}
      {documentToReactComponents(document)}
    </div>
  );
}

export default App;
