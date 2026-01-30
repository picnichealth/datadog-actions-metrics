import { expect, test } from 'vitest'
import {
  computePullRequestClosedMetrics,
  computePullRequestOpenedMetrics,
  computePullRequestReadyForReviewMetrics,
  computePullRequestReviewRequestedMetrics,
} from '../../src/pullRequest/metrics.js'
import {
  examplePullRequestClosedEvent,
  examplePullRequestOpenedEvent,
  examplePullRequestReadyForReviewEvent,
  examplePullRequestReviewRequestedEvent,
} from '../fixtures.js'
import { examplePullRequestFirstCommit } from './fixtures/getPullRequest.js'

test('computePullRequestOpenedMetrics', () => {
  const series = computePullRequestOpenedMetrics(examplePullRequestOpenedEvent)
  expect(series).toMatchSnapshot()
})

test('computePullRequestClosedMetrics', () => {
  const series = computePullRequestClosedMetrics(examplePullRequestClosedEvent, undefined, {
    sendPullRequestLabels: true,
  })
  expect(series).toMatchSnapshot()
})

test('computePullRequestReadyForReviewMetrics', () => {
  const series = computePullRequestReadyForReviewMetrics(examplePullRequestReadyForReviewEvent)
  expect(series).toMatchSnapshot()
})

test('computePullRequestReviewRequestedMetrics', () => {
  const series = computePullRequestReviewRequestedMetrics(examplePullRequestReviewRequestedEvent)
  expect(series).toMatchSnapshot()
})

test('computePullRequestClosedMetricsWithQuery', () => {
  const series = computePullRequestClosedMetrics(examplePullRequestClosedEvent, examplePullRequestFirstCommit, {
    sendPullRequestLabels: true,
  })
  expect(series).toMatchSnapshot()
})
