Feature: Find an existing genre
  In order to find genres
  As a user with admin permissions
  I want to find a genre

  Scenario: An existing genre
    Given I send a GET request to "/genres/ef8ac118-8d7f-49cc-abec-78e0d05af80a"
    Then the response status code should be 200
    And the response content should be:
    """
    {
      "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
      "name": "Bad"
    }
    """
  Scenario: An unexisting genre
    Given I send a GET request to "/genres/ef8ac118-8d7f-49cc-abec-78e0d05af80a-not-exists"
    Then the response status code should be 404
    And the response should be empty