export const sortCards = (cards, orderBy) => {
    return cards.sort((a, b) => {
      if (orderBy === 'priority') {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };