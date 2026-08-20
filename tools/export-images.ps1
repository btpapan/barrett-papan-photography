param(
  [Parameter(Mandatory = $true)]
  [string]$Source,
  [string]$Destination,
  [string[]]$Slugs
)

Add-Type -AssemblyName System.Drawing

if ([string]::IsNullOrWhiteSpace($Destination)) {
  $Destination = Join-Path $PSScriptRoot '..\images'
}

$photos = @(
  @{ Slug = 'golden-flock'; Source = 'Best Best\DSCF6067-Enhanced-NR.JPG' },
  @{ Slug = 'shorebirds-at-sunset'; Source = 'DSCF6045-Enhanced-NR.JPG' },
  @{ Slug = 'three-shorebirds'; Source = 'Best Best\DSCF6059-Enhanced-NR.jpg' },
  @{ Slug = 'hummingbird'; Source = '_DSF0282.JPG' },
  @{ Slug = 'twin-fawns'; Source = '_DSF8435.JPG' },
  @{ Slug = 'beaver'; Source = '_DSF0175-Enhanced-NR.JPG' },
  @{ Slug = 'heron-landing'; Source = '_DSF2727-Enhanced-NR.JPG' },
  @{ Slug = 'misty-ducks'; Source = 'Best Best\_DSF2802-2.jpg' },
  @{ Slug = 'little-blue-heron'; Source = '_DSF3506-Enhanced-NR-2.JPG' },
  @{ Slug = 'juvenile-little-blue-heron'; Source = 'Best Best\_DSF3521-Enhanced-NR.JPG' },
  @{ Slug = 'heron-through-reeds'; Source = '_DSF3519.jpg' },
  @{ Slug = 'red-winged-blackbird'; Source = 'Best Best\_DSF3280-Enhanced-NR-2.JPG' },
  @{ Slug = 'squirrel-on-lichen'; Source = '_DSF8174.JPG' },
  @{ Slug = 'robin-with-berry'; Source = '20250123-DSCF1249-Enhanced-NR.JPG' },
  @{ Slug = 'bluebird'; Source = '_DSF0611-Enhanced-NR.JPG' },
  @{ Slug = 'heron-reflection'; Source = '_DSF3017-Enhanced-NR.JPG' },
  @{ Slug = 'distant-heron'; Source = 'Best Best\_DSF2294-Enhanced-NR.JPG' },
  @{ Slug = 'heron-in-foliage'; Source = '_DSF7906-2.JPG' },
  @{ Slug = 'ducklings'; Source = 'Best Best\_DSF7982.JPG' },
  @{ Slug = 'alligator'; Source = 'DSCF5173-Enhanced-NR.JPG' },
  @{ Slug = 'heron-at-sunset'; Source = 'DSCF6183-Enhanced-NR.JPG' },
  @{ Slug = 'horses-on-beach'; Source = 'DSCF2697.jpg' },
  @{ Slug = 'beach-house'; Source = 'DSCF2601-Enhanced-NR.jpg' },
  @{ Slug = 'pasture'; Source = 'Best Best\908520011039-R1-009.jpg' },
  @{ Slug = 'quiet-lake'; Source = 'Best Best\908520011039-R1-022.jpg' },
  @{ Slug = 'marina'; Source = '908520011039-R1-023.jpg' },
  @{ Slug = 'sunlit-tree'; Source = '908520011039-R1-027.jpg' },
  @{ Slug = 'grain-silos'; Source = 'Best Best\_DSF5927-HDR.JPG' },
  @{ Slug = 'city-skyline'; Source = 'DSCF4130-Enhanced-NR.jpg' },
  @{ Slug = 'winter-berries'; Source = '_DSF1234.jpg' },
  @{ Slug = 'purple-flowers'; Source = 'Best Best\660609010312-R1-015.jpg' },
  @{ Slug = 'pink-zinnia'; Source = 'Best Best\660609010312-R1-016.jpg' },
  @{ Slug = 'passionflower'; Source = 'Best Best\660609010312-R1-022.jpg' }
)

function Apply-Orientation {
  param([System.Drawing.Image]$Image)

  $orientationId = 0x0112
  if ($Image.PropertyIdList -contains $orientationId) {
    $orientation = [BitConverter]::ToUInt16($Image.GetPropertyItem($orientationId).Value, 0)
    switch ($orientation) {
      2 { $Image.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
      3 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
      4 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
      5 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
      6 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
      7 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
      8 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
    }
  }
}

function Save-Jpeg {
  param(
    [Parameter(Mandatory = $true)] [string]$InputPath,
    [Parameter(Mandatory = $true)] [string]$OutputPath,
    [Parameter(Mandatory = $true)] [int]$MaxLongEdge,
    [Parameter(Mandatory = $true)] [long]$Quality
  )

  $image = [System.Drawing.Image]::FromFile($InputPath)
  Apply-Orientation -Image $image

  $scale = [Math]::Min(1.0, $MaxLongEdge / [double][Math]::Max($image.Width, $image.Height))
  $width = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
  $height = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))
  $bitmap = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $bitmap.SetResolution(96, 96)

  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.Clear([System.Drawing.Color]::Black)
  $graphics.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.DrawImage($image, 0, 0, $width, $height)

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality,
    $Quality
  )
  $bitmap.Save($OutputPath, $codec, $encoderParameters)

  $encoderParameters.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
  $image.Dispose()
}

$thumbDirectory = Join-Path $Destination 'thumb'
$largeDirectory = Join-Path $Destination 'large'
New-Item -ItemType Directory -Force -Path $thumbDirectory, $largeDirectory | Out-Null

$photosToExport = if ($Slugs) {
  $photos | Where-Object { $Slugs -contains $_.Slug }
}
else {
  $photos
}

foreach ($photo in $photosToExport) {
  $inputPath = Join-Path $Source $photo.Source
  if (-not (Test-Path -LiteralPath $inputPath)) {
    throw "Missing source image: $inputPath"
  }

  $thumbPath = Join-Path $thumbDirectory ($photo.Slug + '.jpg')
  $largePath = Join-Path $largeDirectory ($photo.Slug + '.jpg')
  Save-Jpeg -InputPath $inputPath -OutputPath $thumbPath -MaxLongEdge 1440 -Quality 84
  Save-Jpeg -InputPath $inputPath -OutputPath $largePath -MaxLongEdge 3200 -Quality 90
  Write-Output $photo.Slug
}

Write-Output "Exported $($photosToExport.Count) photographs to $Destination."

