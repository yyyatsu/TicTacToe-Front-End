const generateCombinations = (size: number): number[][] => 
{
  console.log("Generation...")
  const combinations: number[][] = [];
  
  const diagonal1: number[] = [];
  const diagonal2: number[] = [];

  for (let i = 0; i < size; i++) 
  {
    const row: number[] = [];
    const column: number[] = [];
    
    diagonal1.push(i * size + i);
    diagonal2.push(i * size + (size - i - 1));

    for (let j = 0; j < size; j++)
    {
      row.push(i * size + j);
      column.push(i + j * size);
    }

    combinations.push(row);
    combinations.push(column);
  }

  combinations.push(diagonal1, diagonal2);

  return combinations;
};

export default generateCombinations;
  