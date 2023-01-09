import PropTypes from 'prop-types';
import { Button, Div } from './Button.styled';

export const ButtonLoadMore = ({ loadMore }) => {
  const handleLoadMore = () => {
    loadMore();
  };

  return (
    <Div>
      <Button type="button" onClick={handleLoadMore}>
        Load more
      </Button>
    </Div>
  );
};

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
