const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('') // http://localhost:8080/
  })

  test('Front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('Pokemon card can be opened', async({ page }) => {
    await page.getByText('charizard').click()
    // Expect the new url to be http://localhost:8080/pokemon/charizard
    expect(page.url()).toMatch('http://localhost:8080/pokemon/charizard')
    await expect(page.getByText('solar power')).toBeVisible()
  })

  test('Pokemon card contains buttons to move around', async ({ page }) => {
    await page.goto('/pokemon/charmander')
    await expect(page.getByText('Previous')).toBeVisible()
    await expect(page.getByText('Home')).toBeVisible()
    await expect(page.getByText('Next')).toBeVisible()
  })
})