# == Schema Information
#
# Table name: tracks
#
#  id              :integer          not null, primary key
#  name            :text
#  soundcloud_link :text
#  created_at      :datetime
#  updated_at      :datetime
#

class Track < ActiveRecord::Base
end
