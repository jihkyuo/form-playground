import { useEffect } from 'react';

export default function Index() {

  useEffect(() => {

    fetch('/list')
      .then(res => res.json())
      .then(console.log);
  }, []);

  return (
    <>
      Hello world
    </>
  );
}