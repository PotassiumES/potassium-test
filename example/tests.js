import Test from '../src/Test.js'
import Runner from '../src/Runner.js'
import SynchronousFetchMap from '../src/SynchronousFetchMap.js'
import TestResultsRenderer from '../src/TestResultsRenderer.js'

const tests = []

tests.push(
	new Test('Test 1', (test) => {
		test.assertEqual(123, 123)
		test.assertEqual('ssw', 'ssw')
	})
)

tests.push(
	new Test('Test 2', (test) => {
		test.assertEqual(123, 'BOGUS')
	})
)

tests.push(
	new Test('Test 3', (test) => {
		throw new Error('Nope!')
	})
)

export { tests, Runner, TestResultsRenderer as Renderer }
