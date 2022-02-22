Feature: Create a new genre
  In order to have genres for movies
  As a user with admin permissions
  I want to create a new genre

  Scenario: A valid unexisting genre
    Given I send a PUT request to "/genres/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
    """
    {
      "name": "Bad"
    }
    """
    Then the response status code should be 201
    And the response should be empty