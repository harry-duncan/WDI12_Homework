# == Schema Information
#
# Table name: producers
#
#  id              :integer          not null, primary key
#  name            :text
#  image           :text
#  stage_name      :text
#  genre           :text
#  soundcloud_link :text
#  created_at      :datetime
#  updated_at      :datetime
#

class Producer < ActiveRecord::Base
end
