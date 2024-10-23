export type Event = {
  start: Date;
  end: Date;
  user: {
    name: string;
    avatar: string;
  };
};

export type Segment = {
  start: Date;
  end: Date;
  event?: Event;
};
