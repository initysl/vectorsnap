import { Card, CardHeader, CardTitle } from '../ui/card';

export default function RightSideCard() {
  return (
    <Card className='w-80 h-52'>
      <CardTitle className='bg-amber-100 p-3'>
        <CardHeader className='sedgwick transform rotate-3'>
          Recent Docs
        </CardHeader>
      </CardTitle>
    </Card>
  );
}
