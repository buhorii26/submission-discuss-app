import AnnounceBar from '../components/AnnounceBar';

const stories = {
  title: 'AnnounceBar',
  component: AnnounceBar,
};

export default stories;

function WithTypeSuccess() {
  return (
    <AnnounceBar
      title="Success"
      content="This is a success message"
      ctaLabel="Click me"
      type="success"
    />
  );
}

export { WithTypeSuccess };
