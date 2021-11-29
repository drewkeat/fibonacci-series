def fibonacci(num)
  fib = [0,1]
  if num == 0 || num == 1
    return fib[num]
  end

  while fib.length < num + 1 do 
    fib.push(fib[-2] + fib[-1])
  end

  return fib[num]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
